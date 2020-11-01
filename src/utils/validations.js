const required = () => {
  return v => !!v || "این قسمت باید پر شود";
}

const minlength = (length) => {
  return v => v.length > length || ` باید ${length} باشد`
}

const maxlength = (length) => {
  return v => v.length < length || ` باید ${length} باشد`
}

export default {
  required,
  minlength,
  maxlength
};