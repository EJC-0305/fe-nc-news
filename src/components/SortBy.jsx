import { useEffect, useState } from "react";

function SortBy({topic, searchParams, setSearchParams}) {
    
    const sort_by = searchParams.get('sort_by');
    const orderBy = searchParams.get('orderBy');
    const [buttonActivity, setButtonActivity] = useState({
        'created_at': true,
        'comment_count': false,
        'votes': false
    });
    const [orderActivity, setOrderActivity] = useState({
        'asc': false,
        'desc': true
    });

    useEffect(() => {
        setButtonActivity({
            'created_at': true,
            'comment_count': false,
            'votes': false
        })
        setOrderActivity({
            'asc': false,
            'desc': true
        })
    }, [topic])

    function handleSort(event) {
        const newButtonActivity = {
            'created_at': false,
            'comment_count': false,
            'votes': false
        }
        newButtonActivity[event.target.value] = true;
        setButtonActivity(newButtonActivity);

        if(orderBy) setSearchParams({sort_by: event.target.value, orderBy: orderBy})
        else setSearchParams({sort_by: event.target.value})
    }

    function handleOrder(event) {
        const newOrderActivity = {
            'asc': false,
            'desc': false
        }
        newOrderActivity[event.target.value] = true;
        setOrderActivity(newOrderActivity);

        if(sort_by) setSearchParams({sort_by: sort_by, orderBy: event.target.value})
        else setSearchParams({orderBy: event.target.value})
    }

    return <nav className="sort-by">
            <div className="sort-section">
                <h3>Sort by:</h3>
                <button value="created_at" onClick={handleSort} className={buttonActivity.created_at ? 'active' : 'inactive'}>Date</button>
                <button value="comment_count" onClick={handleSort} className={buttonActivity.comment_count ? 'active' : 'inactive'}>Comment Count</button>
                <button value="votes" onClick={handleSort} className={buttonActivity.votes ? 'active' : 'inactive'}>Votes</button> 
            </div>
            <div className="sort-section">
                <h3>Order:</h3>
                <button value="asc" onClick={handleOrder} className={orderActivity.asc ? 'active' : 'inactive'}>Asc</button>
                <button value="desc" onClick={handleOrder} className={orderActivity.desc ? 'active' : 'inactive'}>Desc</button>
            </div>
        </nav>
}

export default SortBy;