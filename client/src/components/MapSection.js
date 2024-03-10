import GoogleMap from "@/components/GoogleMap";
import style from './MapSection.module.scss';

export default function MapSection () {
  return (
    <section id={style['map']}>
      <GoogleMap className={style['google_map']} />
    </section>
  );
}