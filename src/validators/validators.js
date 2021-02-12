export const required = value => (value ? undefined : "Field is required");
export const maxLength = length => value => 
    (value && value.length > length ? `Max length is ${length} symbols` : undefined);
export const minLength = length => value =>
    (value && value.length < length ? `Minimal length is ${length} symbols` : undefined);
export const composeValidators = (...validators) => value =>
    validators.reduce( (error, validator ) => error || validator(value), undefined );