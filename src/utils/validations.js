const required = () => v => !!v || "این قسمت باید پر شود";

const minlength = (length) => v => v.length > length || ` باید ${length} باشد`;

const maxlength = (length) => v => v.length < length || ` باید ${length} باشد`;

export default {
  required,
  minlength,
  maxlength
};