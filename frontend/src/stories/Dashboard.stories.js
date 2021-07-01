import Dashboard from '../components/Dashboard'

const Template = (args) => <Dashboard {...args} />

export const Host = Template.bind({})
Host.args = {
  user: {
    photo: "https://pbs.twimg.com/media/Eu_xsFsUUAUP0SF?format=jpg&name=4096x4096",
    first_name: "Paul",
    last_name: "Ladd",
    description: "I'm Paul, and I'm a complete and utter goobus. Graphic design is my passion",
    organization_name: "Organization Name Here",
    is_host: true
  }
}

export const Artist = Template.bind({})
Artist.args = {
  user: {
    photo: "https://pbs.twimg.com/media/E0ttaniXsBI0uzA?format=jpg&name=4096x4096",
    first_name: "Doggo",
    last_name: "Arflinson",
    description: "Woof I'm a dog",
    organization_name: "Organization Name Here",
    is_host: false
  }
}

export default {
  title:'Components/Dashboard',
  component: Dashboard
}