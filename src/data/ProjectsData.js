import FilterCountry from '../assets/projectImage/FilterCountry.png';
import FoodApp from '../assets/projectImage/FoodApp.png';
import Protfoili from '../assets/projectImage/Protfoili.png';
import ReactProtfolio from '../assets/projectImage/react-protfolio.png';
import TicTacImage from '../assets/projectImage/tictactoe.png';
import todo from '../assets/projectImage/todo.png';

export const ProjectsData = [
    {
        id: 1,
        projectName: 'Tic Tac Toe Game  ',
        projectDesc: 'A classic Tic Tac Toe game built with React where two players can take turns marking X and O on a 3x3 grid. The game checks for a win or a draw after each move and allows players to restart the game once its over.',
        tags: ['React', 'HTML', 'CSS', 'material-ui'],
        code: 'https://github.com/Kavery-pm/TicTacToe',
        demo: 'https://tic-tac-toe-three-nu-71.vercel.app/',
        image: TicTacImage
    },
    {
        id: 2,
        projectName: 'Country Filter',
        projectDesc: 'This application fetches the country data and filters countries based on regions(continents) and also implements fuzz search based on the name of the country and the capital of the country',
        tags: ['React', 'HTML', 'CSS', 'Javascript'],
        code: 'https://github.com/Kavery-pm/CountryFilter',
        demo: 'https://country-filter.vercel.app/',
        image: FilterCountry
    },
    {
        id: 3,
        projectName: 'Food Order App',
        projectDesc: 'Introducing "Foodie Order" - a sleek and user-friendly React food order app. With Foodie Order, you can easily add mouthwatering items to your cart, adjust quantities to your liking, view your cart contents, and effortlessly add or remove items. Built using modern React technologies like hooks, Context, and CSS modules, this app offers a seamless and visually appealing experience for ordering your favorite foods. Enjoy the convenience and satisfaction of exploring, customizing, and managing your food order in just a few clicks with Foodie Order.',
        tags: ['React', 'HTML', 'CSS', 'Javascript', 'firebase'],
        code: 'https://github.com/Kavery-pm/ReactFoodOrderApp',
        demo: 'https://musical-alfajores-e260c2.netlify.app/',
        image: FoodApp
    },
    {
        id: 4,
        projectName: 'Trello-Inspired Todo List ',
        projectDesc: 'Trello inspired todo-list developed with React, TypeScript, Styled Components, and Redux. this responsive solution empowers you to add, edit, and delete items effortlessly. It provides intuitive drag and drop functionality for seamless organization and you can also Customize your Todo List with color theme options, reflecting your personal style. ',
        tags: ['React', 'HTML', 'CSS', 'typescript', 'redux-toolkit', 'styled components'],
        code: 'https://github.com/Kavery-pm/trello-todo',
        demo: 'https://trello-todo-ten.vercel.app/',
        image: todo
    },
    {
        id: 5,
        projectName: 'Protfolio Website',
        projectDesc: 'Protfolio website developed using react and changing mode functionality',
        tags: ['React', 'HTML', 'SCSS', 'material-ui'],
        code: 'https://portfolio-template-kappa-khaki.vercel.app/',
        demo: 'https://github.com/Kavery-pm/portfolioTemplate',
        image: ReactProtfolio
    },


]