import Dashboard from '../components/Dashboard'

const Template = (args) => <Dashboard {...args} />

export const Default = Template.bind({})
Default.args = {
  user: {
    photo: "https://pbs.twimg.com/media/Eu_xsFsUUAUP0SF?format=jpg&name=4096x4096",
    first_name: "Paul",
    last_name: "Ladd",
    description: "I'm Paul, and I'm a complete and utter goobus. Graphic design is my passion",
    organization_name: "Organization Name Here"
  }
}

export default {
  title:'Components/Dashboard',
  component: Dashboard
}