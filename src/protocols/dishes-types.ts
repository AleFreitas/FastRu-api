export type Dish = {
    main_dish:string,
    salad1:string,
    salad2:string,
    accompaniment:string,
    dessert:string,
    date:Date
}

export type DishEntity = {
    worker_id:number,
    main_dish_id:number,
    salad1_id:number,
    salad2_id:number,
    accompaniment_id:number,
    dessert_id:number,
    date:Date
}