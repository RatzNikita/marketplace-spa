
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCategoryInput {
    name: string;
}

export class CreateProductInput {
    title: string;
    description?: Nullable<string>;
    price?: Nullable<number>;
    category?: Nullable<string>;
    imagesB64?: Nullable<Nullable<string>[]>;
}

export class UpdateProductInput {
    id: number;
    title?: Nullable<string>;
    description?: Nullable<string>;
    price?: Nullable<number>;
}

export class CreateUserInput {
    name: string;
    password: string;
}

export class UpdateUserInput {
    id: string;
    name?: Nullable<string>;
    password?: Nullable<string>;
}

export class Product {
    id: string;
    title: string;
    description?: Nullable<string>;
    price?: Nullable<number>;
    rating?: Nullable<number>;
    category: Category;
    images?: Nullable<Nullable<Image>[]>;
    owner?: Nullable<User>;
}

export class Category {
    id: string;
    name: string;
}

export class Image {
    image: string;
}

export abstract class IQuery {
    abstract products(user?: Nullable<string>): Nullable<Product[]> | Promise<Nullable<Product[]>>;

    abstract product(id: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract productByCategory(category: string): Product[] | Promise<Product[]>;

    abstract categories(): Category[] | Promise<Category[]>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;

    abstract updateProduct(updateProductInput: UpdateProductInput): Product | Promise<Product>;

    abstract removeProduct(id: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract createCategory(createCategoryInput: CreateCategoryInput): Category | Promise<Category>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id?: Nullable<string>;
    name?: Nullable<string>;
    password?: Nullable<string>;
}

type Nullable<T> = T | null;
