import styles from "./Menu.module.css";


const menu = (data) => {
    return (
        <div className={styles.container}>
            <h1>Menu </h1>
            <div>
              {/* {data.map(food => <p>{food.name}</p>)} */}
            </div>
        </div>
    );
};

export default menu;


export async function getStaticProps() {
    const res = await fetch("https://api-food-shopping.vercel.app/data")
    const data = await res.json();
    console.log(data);

    return{
        props : { data }
    }
}