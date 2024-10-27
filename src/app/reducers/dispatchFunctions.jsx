export const request = (type) => {
    return {
      type: type,
    };
  };
  export const success = (type, data) => {
    return {
      type: type,
      payload: data,
    };
  };
  export const failure = (type, error) => {
    return {
      type: type,
      payload: error,
    };
  };
  