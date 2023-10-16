import React, {useEffect,useState} from 'react';

export default function Products() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]); //  초기값을 빈 배열로
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked(prev => !prev);

useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
    .then(res => res.json())
    .then((data) => {
        console.log("데이터를 동적으로 네트워크에서 받아옴", data)
        setProducts(data)
    });
    return () => {
        console.log('메모리 청소를 위한 과정')
    }
},[checked])
// 추가적으로 어떤 요청이 왔을 때 네트워크 통신을 해야하는 경우도 있다.

 // json 파일 값을 동적으로 가져와서 setProducts를 진행한다?
 /*    fetch('data/products.json')
    .then(res => res.json())
    .then((data) => {
        console.log("데이터를 동적으로 네트워크에서 받아옴")
        setProducts(data)
    }); 
*/        
    return (
        <>
            <input id='checkbox' type="checkbox" value={checked} onChange={handleChange} />
            <label htmlFor="checkbox">show Only hot sale</label>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
            <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        </>
    );
}

