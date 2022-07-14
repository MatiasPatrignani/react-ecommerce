import '../Link/Link.css'

const Link = ({ link }) => {
  return (
    <a className="NavLink" href={link.url}>{link.title}</a>
  )
}

export default Link