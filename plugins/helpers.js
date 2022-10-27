export const propertiesGenerator = (props = [], { path, mut } = {}) => {
  return props.reduce((obj, prop) => {
    obj[prop.property] = {
      get() {
        if (prop.oneKey && prop.twoKey && prop.threeKey) {
          const val =
            $nuxt.$store.state[path][prop.oneKey][prop.twoKey][prop.threeKey] ||
            prop.defaultValue;
          if (prop.type === "String") {
            return String(val);
          }
          if (prop.type === "Number" && !Number.isNaN(Number(val))) {
            return Number(val);
          }
          return val;
        }
        if (prop.oneKey && prop.twoKey) {
          const val =
            $nuxt.$store.state[path][prop.oneKey][prop.twoKey] ||
            prop.defaultValue;
          if (prop.type === "String") {
            return String(val);
          }
          if (prop.type === "Number" && !Number.isNaN(Number(val))) {
            return Number(val);
          }
          return val;
        }
        if (prop.oneKey) {
          const val =
            $nuxt.$store.state[path][prop.oneKey] || prop.defaultValue;
          if (prop.type === "String") {
            return String(val);
          }
          if (prop.type === "Number" && !Number.isNaN(Number(val))) {
            return Number(val);
          }
          return val;
        }
      },
      set(value) {
        $nuxt.$store.commit(mut, {
          oneKey: prop.oneKey,
          twoKey: prop.twoKey,
          threeKey: prop.threeKey,
          type: prop.type,
          upper: prop.upper,
          lower: prop.lower,
          value,
        });
      },
    };
    return obj;
  }, {});
};

export const setProperty = (state, data) => {
  const oneKey = data.oneKey;
  const twoKey = data.twoKey;
  const threeKey = data.threeKey;
  const type = data.type;
  const upper = data.upper;
  const lower = data.lower;
  let customValue = data.value;

  if (type === "String") {
    customValue = String(customValue);
  } // Convertir a String
  if (upper) {
    customValue = customValue.toUpperCase();
  }
  if (lower) {
    customValue = customValue.toLowerCase();
  }

  if (oneKey && twoKey && threeKey) {
    state[oneKey][twoKey][threeKey] = customValue;
    return;
  }
  if (oneKey && twoKey) {
    state[oneKey][twoKey] = customValue;
    return;
  }
  if (oneKey) {
    state[oneKey] = customValue;
  }
};
