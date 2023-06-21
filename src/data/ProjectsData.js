import FilterCountry from '../assets/projectImage/FilterCountry.png';
import FoodApp from '../assets/projectImage/FoodApp.png';

export const ProjectsData = [
    {
        id: 1,
        projectName: 'Country Filter',
        projectDesc: 'This application fetches the country data and filters countries based on regions(continents) and also implements fuzz search based on the name of the country and the capital of the country',
        tags: ['React', 'HTML' ,'CSS', 'Javascript'],
        code: 'https://github.com/Kavery-pm/CountryFilter',
        demo: 'https://country-filter.vercel.app/',
        image: FilterCountry
    },
{
    id: 2,
    projectName: 'Food Order App',
    projectDesc: 'Introducing "Foodie Order" - a sleek and user-friendly React food order app. With Foodie Order, you can easily add mouthwatering items to your cart, adjust quantities to your liking, view your cart contents, and effortlessly add or remove items. Built using modern React technologies like hooks, Context, and CSS modules, this app offers a seamless and visually appealing experience for ordering your favorite foods. Enjoy the convenience and satisfaction of exploring, customizing, and managing your food order in just a few clicks with Foodie Order.',
    tags: ['React', 'HTML' ,'CSS', 'Javascript','firebase'],
    code: 'https://github.com/Kavery-pm/ReactFoodOrderApp',
    demo: 'https://musical-alfajores-e260c2.netlify.app/',
    image: FoodApp
}]