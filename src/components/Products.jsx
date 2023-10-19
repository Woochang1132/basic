import React, {useState} from 'react';
import useProducts from '../hooks/use-products';

export default function Products() {

    const [count, setCount] = useState(0);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked(prev => !prev);
    const [loading, error, products] = useProducts({salesOnly : checked})
    

// 추가적으로 어떤 요청이 왔을 때 네트워크 통신을 해야하는 경우도 있다.

 // json 파일 값을 동적으로 가져와서 setProducts를 진행한다?
 /*    fetch('data/products.json')
    .then(res => res.json())
    .then((data) => {
        console.log("데이터를 동적으로 네트워크에서 받아옴")
        setProducts(data)
    }); 
*/        
    if(loading) return <p>Loading ...</p>

    if(error) return <p>{error}</p>

    return (
        <>
            <input id='checkbox' type="checkbox" value={checked} onChange={handleChange} />
            <label htmlFor="checkbox">show Only hot sale</label>
            <ul>                
                {products.map((product) => (
                    // 리스트의 자식 요소들은 유일한 key를 가지고 있어야 한다.
                    // 배열 안의 위치가 변했을 때도 key를 가지고 판단해서 업데이트 해야되는 지 
                    // 아닌지를 확인한다.
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

