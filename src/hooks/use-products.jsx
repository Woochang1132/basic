import { useEffect, useState } from 'react';

export default function useProducts({salesOnly}){
    // 해당 요소들을 다른 component에서도 사용한다고 하면, 중복이 발생하게 된다.
    // 중복을 방지하기 위한 custom hook을 만들 수 있다.
    // custom hook 내부적으로 가지고 있는 요소
    // useState를 쓰고 다 유사하지만, return UI 하는 js 요소가 없다.
    // 공유하고 싶은 data만 return 한다.
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [products, setProducts] = useState([]); 

useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
    .then(res => res.json())
    .then((data) => {
        console.log("데이터를 동적으로 네트워크에서 받아옴", data)
        setProducts(data)
    })
    .catch((e) => setError('에러가 발생했음!'))
    .finally(() => setLoading(false));
    return () => {
        console.log('메모리 청소를 위한 과정')
    }
},[salesOnly])

return [loading, error, products];
}