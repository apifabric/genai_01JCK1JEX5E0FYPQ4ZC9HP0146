import { MenuRootItem } from 'ontimize-web-ngx';

import { CustomerCardComponent } from './Customer-card/Customer-card.component';

import { HotChocolateBarCardComponent } from './HotChocolateBar-card/HotChocolateBar-card.component';

import { InstructorCardComponent } from './Instructor-card/Instructor-card.component';

import { RentalTransactionCardComponent } from './RentalTransaction-card/RentalTransaction-card.component';

import { SkiEquipmentCardComponent } from './SkiEquipment-card/SkiEquipment-card.component';

import { TrainingSessionCardComponent } from './TrainingSession-card/TrainingSession-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Customer', name: 'CUSTOMER', icon: 'view_list', route: '/main/Customer' }
    
        ,{ id: 'HotChocolateBar', name: 'HOTCHOCOLATEBAR', icon: 'view_list', route: '/main/HotChocolateBar' }
    
        ,{ id: 'Instructor', name: 'INSTRUCTOR', icon: 'view_list', route: '/main/Instructor' }
    
        ,{ id: 'RentalTransaction', name: 'RENTALTRANSACTION', icon: 'view_list', route: '/main/RentalTransaction' }
    
        ,{ id: 'SkiEquipment', name: 'SKIEQUIPMENT', icon: 'view_list', route: '/main/SkiEquipment' }
    
        ,{ id: 'TrainingSession', name: 'TRAININGSESSION', icon: 'view_list', route: '/main/TrainingSession' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CustomerCardComponent

    ,HotChocolateBarCardComponent

    ,InstructorCardComponent

    ,RentalTransactionCardComponent

    ,SkiEquipmentCardComponent

    ,TrainingSessionCardComponent

];