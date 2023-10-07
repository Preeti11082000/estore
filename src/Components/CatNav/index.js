import { useDispatch, useSelector } from 'react-redux';
import './_cat-nav.scss';
import { useEffect } from 'react';
import { getCategories } from '../../store/Category/actions';


const CatNav = ()=>{

    const categories =useSelector(state=>state.categoryReducer.categories);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCategories())
    },[])
    console.log(categories,"hello")

    return(
        <>
            <div className='cat-nav-container container'>
                <ul>

                    {
                        categories.map((category)=>{
                            if(category.parent_category_id===null){
                                return(
                                    <li className='list-items'> <a href='#'>{category.category} </a> </li>
                                )
                            }
                           
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default CatNav;