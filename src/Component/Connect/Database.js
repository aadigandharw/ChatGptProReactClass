import React, { useState } from "react";

import { Table, Button, Form, Input, Modal } from "antd";
import { render } from "@testing-library/react";



function Database() {

  const data = [
  {
    key: "1",
    name: "Aditya Gandharv",
    class: "10th",
    email: "aditya@example.com",
    address: "Bhopal, MP",
  },
  {
    key: "2",
    name: "Rahul Sharma",
    class: "9th",
    email: "rahul.sharma@example.com",
    address: "Delhi, India",
  },
  {
    key: "3",
    name: "Priya Verma",
    class: "12th",
    email: "priya.verma@example.com",
    address: "Mumbai, MH",
  },
  {
    key: "4",
    name: "Aman Kanwar",
    class: "11th",
    email: "aman.khan@example.com",
    address: "Lucknow, UP",
  },
];

//Use State Is Here

const [isModalOpen, setIsModalOpen] = useState(false);

const handleEdit = () => {
  setIsModalOpen(true);
};

const handleSubmit = () =>{
  setIsModalOpen(false);
  alert("Your Message Has Been updated")
};

  // Table columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      render: (_, record) => <Button onClick={()=>handleEdit(record)}>Edit</Button>,
      
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} style={{ width: "100vw" }} />

      <Modal
        title="Edit Student"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
            height: "80vh",
            marginTop: "50px",
          }}
        >
          {/* Form Box */}
          <div
            style={{
              width: "500px",
              background: "#fff",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              marginLeft: "50px",
            }}
          >
            <h2 style={{ color: "#0a0f2c", fontWeight: "bold" }}>
              Enter Your Data
            </h2>

            <Form onFinish={handleSubmit}>
              <Form.Item label="Name" name="name">
                <Input />
              </Form.Item>

              <Form.Item label="Class" name="class">
                <Input />
              </Form.Item>

              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>

              <Form.Item label="Address" name="address">
                <Input />
              </Form.Item>

              <Form.Item>
                <Button
                  htmlType="submit"
                  style={{
                    width: "100%",
                    background: "#0a0f2c",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Database;
