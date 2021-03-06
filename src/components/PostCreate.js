import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class PostCreate extends Component {

    renderField(field) {
        console.log(field)
        return (
            <div className='form-group'>
                <label>{ field.label }</label>
                <input
                    className='form-control'
                    type='text'
                    { ...field.input }
                />
                { field.meta.touched ? field.meta.error : '' }
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <Field
                    label='Title For Post'
                    name='title'
                    component={ this.renderField }
                />
                <Field
                    label='Categories'
                    name='categories'
                    component={ this.renderField }
                />
                <Field
                    label='Post Content'
                    name='content'
                    component={ this.renderField }
                />
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'Enter a title bc!';
    }

    if(!values.categories) {
        errors.categories = 'Enter some categories bc!';
    }

    if(!values.content) {
        errors.content = 'Enter some content bc!';
    }
    console.log(errors)
}

export default reduxForm({
    validate: validate,
    form: 'PostCreateForm'
})(PostCreate);