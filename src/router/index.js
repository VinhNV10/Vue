import Search from '../page/ScreenFlow/Search.vue';
import Add from '../page/ScreenFlow/Add.vue';

const routes = [
    {
        path: '/search',
        component: Search,
        children: [
            {
                path: '/search/add',
                component: Add
            }
        ]
    }
]

export default routes;