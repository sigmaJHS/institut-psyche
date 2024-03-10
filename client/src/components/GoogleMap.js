export default function GoogleMap (props) {
  return (
    <iframe
      className={props.className}
      title='address'
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.54738534190255!2d-46.83962808828221!3d-23.003470698467186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf2a895a1313b7%3A0xe0bdb3eea974cc80!2sR.%20Soares%20Muniz%2C%20128%20-%20Centro%2C%20Itatiba%20-%20SP%2C%2013250-301!5e0!3m2!1spt-BR!2sbr!4v1692725382081!5m2!1spt-BR!2sbr'
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    />
  )
}