import Card from './../components/Card';

export default function Publications () {
  return (
    <div className='container'>
      <h1>Publicações</h1>
      <Card
        title='O que é Psicanálise?'
        date='05/10/2023'
        description='A Psicanálise, fundada pelo médico neurologista Sigmund Freud, hoje é difundida mundialmente. Entretanto, muitas pessoas ainda confundem o que é Psicanálise e o que não é. Por isso, preparamos este texto para que possa ser entendido melhor o significado desse termo.'
        link='/'
      />
    </div>
  );
}