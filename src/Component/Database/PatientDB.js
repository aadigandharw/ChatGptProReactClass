import { Button, Form, Input, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { getPatientData , postPatientData } from "../../api/patientApi";
import axios from "axios";


function PatientDB() {
  const [Data, setData] = useState([]); // <-- state banaya
    const [loading, setLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [form] = Form.useForm();

  const FetchData = async () => {
    const res = await getPatientData();
    setData(res);
  };

  useEffect(() => {
    FetchData();
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
      FetchData();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // Delete Student
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}/`);
      FetchData();
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


  const col = [
    {
      title: "Id", // <-- spelling sahi kiya
      dataIndex: "id",
    },
    {
      title: "Patient",
      dataIndex: "patient_name",
    },
    {
      title: "Contact No.",
      dataIndex: "contact_number",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Admission-Date",
      dataIndex: "admit_date",
    },
    {
      title: "Disease",
      dataIndex: "disease",
    },

    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button style={{ marginRight: "20px" }} onClick={handleOk}>Edit</Button>
          <Button danger>Delete</Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" style={{ marginLeft: "10px" }} onClick={handleOk}>
        Add Data
      </Button>
      <Table
        columns={col}
        dataSource={Data}
        bordered
        rowKey="id"
        style={{ width: 1500, marginLeft: "10px" }}
      />

      <Modal
        title={editingStudent ? "Edit Student" : "Add Student"}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="first_name"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="last_name"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="course" label="Course" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="student_class"
            label="Class"
            rules={[{ required: true }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
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

export default PatientDB;
