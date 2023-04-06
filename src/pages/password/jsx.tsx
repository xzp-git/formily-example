//@ts-nocheck
import React from "react";
import { createForm } from "@formily/core";
import { Field } from "@formily/react";
import {
  Form,
  FormItem,
  Input,
  Password,
  Submit,
  FormButtonGroup,
} from "@formily/antd";
import { Card } from "antd";

const form = createForm({
  validateFirst: true,
});

export default () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#eee",
        padding: "40px 0",
      }}
    >
      <Card title="变更密码" style={{ width: 620 }}>
        <Form
          form={form}
          labelCol={5}
          wrapperCol={16}
          onAutoSubmit={console.log}
        >
          <Field
            name="username"
            title="用户名"
            required
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="email"
            title="邮箱"
            required
            validator="email"
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field
            name="old_password"
            title="原始密码"
            required
            decorator={[FormItem]}
            component={[Password]}
          />
          <Field
            name="password"
            title="新密码"
            required
            decorator={[FormItem]}
            component={[
              Password,
              {
                checkStrength: true,
              },
            ]}
            reactions={(field) => {
              const confirm = field.query(".confirm_password");
              field.selfErrors =
                confirm.get("value") &&
                field.value &&
                field.value !== confirm.get("value")
                  ? "确认密码不匹配"
                  : "";
            }}
          />
          <Field
            name="confirm_password"
            title="确认密码"
            required
            decorator={[FormItem]}
            component={[
              Password,
              {
                checkStrength: true,
              },
            ]}
            reactions={(field) => {
              const confirm = field.query(".password");
              field.selfErrors =
                confirm.get("value") &&
                field.value &&
                field.value !== confirm.get("value")
                  ? "确认密码不匹配"
                  : "";
            }}
          />
          <FormButtonGroup.FormItem>
            <Submit block size="large">
              确认变更
            </Submit>
          </FormButtonGroup.FormItem>
        </Form>
      </Card>
    </div>
  );
};
