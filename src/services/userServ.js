import dataBaseConnection from '../utils/database'
import User from '../models/userMod';

export const listUsers = async () => {
    await dataBaseConnection()
    const users = await User.find()
    return users;
};

export const createUser = async (user) => {
    await dataBaseConnection()
    const createUser = await User.create(user)
    return createUser;
};

export const deleteUser = async (id) => {
    await dataBaseConnection();
    await User.findByIdAndDelete(id);
};

export const updateUser = async (id, newBody) => {
    await dataBaseConnection;
    await User.findByIdAndUpdate(id, newBody);
};