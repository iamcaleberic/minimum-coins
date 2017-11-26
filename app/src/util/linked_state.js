// handles the value of a html input and links it to a determined state key
function createHandler(component, key) {
  return e => {
    const el = e.target
    const value = el.value

    component.setState({
      [key]: value
    })
  }
}

export default function linkState(component, key) {
  return createHandler(component, key)
}
