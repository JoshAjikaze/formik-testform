import { Field, Form, Formik } from "formik";
import { TextInputField, CheckBoxField, NumberField, TextAreaField } from "./AppHelpers";
import * as Yup from 'yup'

const validationSchema = Yup.object({
    firstName: Yup.string().required("Name is required")
})
export default function () {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    millionaire: false,
                    money: 0,
                    description: ''
                }} 

                onSubmit={() => {}}
            >
                <Form autoComplete="off" className="w-2/4">
                    <p>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstname" component={TextInputField} />
                    </p>
                    <p>
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="firstname" component={TextInputField} />
                    </p>
                    <p>
                        <label htmlFor="millionaire">Millionaire ?</label>
                        <Field name="firstname" component={CheckBoxField} />
                    </p>
                    <p>
                        <label htmlFor="money">Currrent Income</label>
                        <Field name="firstname" component={NumberField} />
                    </p>
                    <p>
                        <label htmlFor="description">Description</label>
                        <Field name="firstname" component={TextAreaField} />
                    </p>
                </Form>
            </Formik>
        </div>
    )
}