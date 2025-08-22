import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/student/";

function StudentTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [form] = Form.useForm();

  // Fetch Data
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add / Update Student
  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (editingStudent) {
        // Update student
        await axios.put(`${API_URL}${editingStudent.id}/`, values);
      } else {
        // Add new student
        await axios.post(API_URL, values);
      }
      setIsModalVisible(false);
      form.resetFields();
      setEditingStudent(null);
      fetchData();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // Delete Student
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}/`);
      fetchData();
      alert("Your Data Has been Deleted")
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  // Edit Student
  const handleEdit = (record) => {
    setEditingStudent(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  // Add Student
  const handleAdd = () => {
    setEditingStudent(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "First Name", dataIndex: "first_name", key: "first_name" },
    { title: "Last Name", dataIndex: "last_name", key: "last_name" },
    { title: "Course", dataIndex: "course", key: "course" },
    { title: "Class", dataIndex: "student_class", key: "student_class" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Age", dataIndex: "age", key: "age" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button  style={{marginRight:'20px'}} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button  danger onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>
        Add Student
      </Button>
      <Table
        dataSource={data}
        columns={columns}
        rowKey="id"
        loading={loading}
        bordered
        scroll={{
          x:1000,
          y:500
        }}
        size="middle"
        
      />

      <Modal
        title={editingStudent ? "Edit Student" : "Add Student"}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="first_name" label="First Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="last_name" label="Last Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="course" label="Course" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="student_class" label="Class" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="age" label="Age" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default StudentTable;
