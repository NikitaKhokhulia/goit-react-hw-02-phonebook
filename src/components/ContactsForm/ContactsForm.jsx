import { Formik, Form, Field } from 'formik';

const initialValues = {
  name: '',
};

const ContactsForm = () => {
  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <button type="submit"> Add contact </button>
      </Form>
    </Formik>
  );
};

export default ContactsForm;
