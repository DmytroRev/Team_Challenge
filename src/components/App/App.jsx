import { useEffect, useState } from 'react';

import { getConnection, getAllRecords } from '../../../api';

const App = () => {
    const [demo, setDemo] = useState('');
    const [records, setRecords] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const demo = await getConnection();
                const records = await getAllRecords();
                setDemo(demo);
                setRecords(records);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <p>{demo}</p>
            {records.map((item) => (
                <div key={item.name}>{item.name}</div>
            ))}
        </div>
    );
};

export default App;

