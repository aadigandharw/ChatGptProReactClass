import React, { useState } from "react";
import { Button, Form, Input } from "antd";

function Connect() {
  const [form] = Form.useForm();   // ✅ form instance
  const [data, SetData] = useState({});

  const handleSubmit = (value) => {
    SetData(value);
    console.log(value);

    form.resetFields();   // ✅ correct way to clear fields
  };

  return (
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
        <h2 style={{ color: "#0a0f2c", fontWeight: "bold" }}>Enter Your Data</h2>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
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

      {/* Display Box */}
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
        <h2 style={{ color: "#0a0f2c", fontWeight: "bold" }}>Your Data Is Here</h2>

        <h3>Name: {data.name}</h3>
        <h3>Class: {data.class}</h3>
        <h3>Email: {data.email}</h3>
        <h3>Address: {data.address}</h3>
      </div>
    </div>
  );
}

export default Connect;
