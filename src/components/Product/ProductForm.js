import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import FormField from "./../common/FormField";
import { productFormField } from "./formFields";
import { connect } from "react-redux";

class ProductForm extends Component {
  renderFields(formFields) {
    return formFields.map(({ label, name, type, required }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          type={type}
          component={FormField}
          required={required}
        />
      );
    });
  }

  render() {
    const { onProductSubmit } = this.props;
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
        <div>{this.renderFields(productFormField)}</div>
          <button className="btn btn-block btn-info title" type="submit">
            บันทึก
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  productFormField.forEach(({ name, required }) => {
    if (!values[name] && required) {
      errors[name] = "กรุณากรอกข้อมูลด้วย";
    }
  });
  return errors;
}

function mapStateToProps({ products }) {
  if (products && products.id) {
    return { initialValues: products };
  } else {
    return {};
  }
}

ProductForm = reduxForm({ validate, form: "productForm" })(ProductForm);

export default connect(mapStateToProps)(ProductForm);
