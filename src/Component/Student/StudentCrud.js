import React, { useEffect, useState } from "react";
import { Table, Button, Form, Input, Modal } from "antd";

const scriptURL = "https://script.google.com/macros/s/AKfycbxBsePoGrbphejh2YesCe1nmh20jxMkZX4skgj9H68tsgTmYDV2fpm58jc7oBvXuH3TlA/exec"; // <-- yaha apna deployed script url daalna hai

function Database() {
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const [editingRecord, setEditingRecord] = useState(null);

  // Fetch Data
  const fetchData = async () => {
    const response = await fetch(scriptURL);
    const result = await response.json();
    const formatted = result.slice(1).map((row, index) => ({
      key: index,
      id: row[0],
      name: row[1],
      email: row[2],
      class: row[3],
    }));
    setData(formatted);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add Data
  const onFinish = async (values) => {
    await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify({ ...values, action: "add" }),
    });
    fetchData();
    form.resetFields();
  };

  // Update Data
  const handleUpdate = async (values) => {
    await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify({ ...values, id: editingRecord.id, action: "update" }),
    });
    setEditingRecord(null);
    fetchData();
  };

  // Delete Data
  const handleDelete = async (record) => {
    await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify({ id: record.id, action: "delete" }),
    });
    fetchData();
  };

  const columns = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Class", dataIndex: "class" },
    {
      title: "Actions",
      render: (_, record) => (
        <>
          <Button onClick={() => setEditingRecord(record)}>Edit</Button>
          <Button danger onClick={() => handleDelete(record)} style={{ marginLeft: 10 }}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Database</h2>
      <Form form={form} layout="inline" onFinish={onFinish}>
        <Form.Item name="id" rules={[{ required: true }]}>
          <Input placeholder="ID" />
        </Form.Item>
        <Form.Item name="name" rules={[{ required: true }]}>
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="class" rules={[{ required: true }]}>
          <Input placeholder="Class" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>

      <Table dataSource={data} columns={columns} style={{ marginTop: 20 }} />

      <Modal
        title="Edit Student"
        visible={!!editingRecord}
        onCancel={() => setEditingRecord(null)}
        footer={null}
      >
        <Form
          initialValues={editingRecord || {}}
          onFinish={handleUpdate}
          layout="vertical"
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="class" label="Class" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

export default Database;
