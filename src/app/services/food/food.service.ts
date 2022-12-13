import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id: number): Food {
    return this.getAll().find((food) => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 7 },
      { name: 'Biriyani', count: 3 },
      { name: 'FastFood', count: 3 },
      { name: 'Pizza', count: 0 },
      { name: 'Lunch', count: 1 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Chicken Biriyani',
        cookTime: '',
        price: 249,
        favorite: false,
        origins: ['Hyderabad'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['Biriyani'],
      },
      {
        id: 2,
        name: 'Mutton Biriyani',
        price: 349,
        cookTime: '',
        favorite: false,
        origins: ['Hyderabad'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['Biriyani'],
      },
      {
        id: 3,
        name: 'Prawns Biriyani',
        price: 399,
        cookTime: '',
        favorite: false,
        origins: ['Hyderabad'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['Biriyani'],
      },
      {
        id: 4,
        name: 'Noodles',
        price: 99,
        cookTime: '',
        favorite: true,
        origins: ['Chineese'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood'],
      },
      {
        id: 5,
        name: 'Fried rice',
        price: 149,
        cookTime: '',
        favorite: false,
        origins: ['india'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['FastFood'],
      },
      {
        id: 6,
        name: 'Gobi Manchurian',
        price: 99,
        cookTime: '',
        favorite: false,
        origins: ['Chineese'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood'],
      },

      {
        id: 6,
        name: 'Indian Meal',
        price: 149,
        cookTime: '',
        favorite: false,
        origins: ['Andhra'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-7.jpg',
        tags: ['Lunch'],
      },
    ];
  }
}
