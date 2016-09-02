export const test = makeAction('TEST')

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}