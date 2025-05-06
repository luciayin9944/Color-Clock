

import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './styles.css';

function App() {
    const [currentTime, setCurrentTime] = useState(new Date()); // 初始化当前时间

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date()); // 每秒更新时间
        }, 1000);

        // 清理定时器
        return () => clearInterval(timer);
    }, []);

    const formattedDate = format(currentTime, 'yyyy-MM-dd HH:mm:ss');

    return (
        <div>
            <h1>Current Time</h1>
            <p>{formattedDate}</p>
        </div>
    );
}

export default App;








// import React from 'react';
// import { format } from 'date-fns';

// function App() {
//     const now = new Date();
//     const formattedDate = format(now, 'yyyy-MM-dd HH:mm:ss');   
//     return (
//         <div>
//             <h1>Current Time</h1>
//             <p>{formattedDate}</p>
//         </div>
//     );
// }

// export default App;