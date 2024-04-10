import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Error } from '../pages/Error';
import { Dashboard } from '../pages/Dashboard';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login/*' element={<Login />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}