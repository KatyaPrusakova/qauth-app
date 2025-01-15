/**
 * This is auto-generated file by Quorini app
 * contatining GraphQL mutation dedicated for users 
 * based on access permission of the project.
 * 
 * Place it in your web app project in ./src/quorini-mutations.ts
 */

import { ObjectId } from "bson"

import type { Admin, User, Event, Interest } from "./quorini-types.ts"

type QueryWithParams<VarsType, ResponseType> = string & {
  __queryVars: VarsType,
  __queryResponse: ResponseType
}


export type createEventInput = {
    name?: string
  date?: Date
  description?: string
  tag?: Interest

}

export type createEventVars = {
    
  input: createEventInput
}

export type createEventResponse = {
  createEvent: {
    name?: string
    date?: Date
  description?: string
  tag?: Interest
  }
}


export const createEvent = `mutation create($input: createEventInput!) { createEvent(input: $input) {
id} }` as QueryWithParams<
  createEventVars,
  createEventResponse 
>



export type createAdminInput = {
    fullName: string | "deprecated"

}

export type createAdminVars = {
    
  input: createAdminInput
}

export type createAdminResponse = {
  createAdmin: {
    fullName?: string | "deprecated"
    }
}

/**
* Administartion user has full control of project application.
*/
export const createAdmin = `mutation create($input: createAdminInput!) { createAdmin(input: $input) {
id} }` as QueryWithParams<
  createAdminVars,
  createAdminResponse 
>



export type createUserInput = {
    name?: string
  location?: string

}

export type createUserVars = {
    
  input: createUserInput
}

export type createUserResponse = {
  createUser: {
    name?: string
    location?: string
  }
}


export const createUser = `mutation create($input: createUserInput!) { createUser(input: $input) {
id} }` as QueryWithParams<
  createUserVars,
  createUserResponse 
>



export type updateEventInput = {
    name?: string
  date?: Date
  description?: string
  tag?: Interest

}

export type updateEventVars = {
  id: string  
  input: updateEventInput
}

export type updateEventResponse = {
  updateEvent: {
    name?: string
    date?: Date
  description?: string
  tag?: Interest
  }
}


export const updateEvent = `mutation update($input: updateEventInput!) { updateEvent(input: $input) {
id} }` as QueryWithParams<
  updateEventVars,
  updateEventResponse 
>



export type updateAdminInput = {
    fullName?: string | "deprecated"

}

export type updateAdminVars = {
  id: string  
  input: updateAdminInput
}

export type updateAdminResponse = {
  updateAdmin: {
    fullName?: string | "deprecated"
    }
}

/**
* Administartion user has full control of project application.
*/
export const updateAdmin = `mutation update($input: updateAdminInput!) { updateAdmin(input: $input) {
id} }` as QueryWithParams<
  updateAdminVars,
  updateAdminResponse 
>



export type updateUserInput = {
    name?: string
  location?: string

}

export type updateUserVars = {
  id: string  
  input: updateUserInput
}

export type updateUserResponse = {
  updateUser: {
    name?: string
    location?: string
  }
}


export const updateUser = `mutation update($input: updateUserInput!) { updateUser(input: $input) {
id} }` as QueryWithParams<
  updateUserVars,
  updateUserResponse 
>


export type deleteEventVars = {
  id: string  
}

export type deleteEventResponse = {
  deleteEvent: {
  id: string
    }
}


export const deleteEvent = `mutation delete($id: ID!) { deleteEvent(id: $id) {
id} }` as QueryWithParams<
  deleteEventVars,
  deleteEventResponse 
>


export type deleteAdminVars = {
  id: string  
}

export type deleteAdminResponse = {
  deleteAdmin: {
  id: string
    }
}

/**
* Administartion user has full control of project application.
*/
export const deleteAdmin = `mutation delete($id: ID!) { deleteAdmin(id: $id) {
id} }` as QueryWithParams<
  deleteAdminVars,
  deleteAdminResponse 
>


export type deleteUserVars = {
  id: string  
}

export type deleteUserResponse = {
  deleteUser: {
  id: string
    }
}


export const deleteUser = `mutation delete($id: ID!) { deleteUser(id: $id) {
id} }` as QueryWithParams<
  deleteUserVars,
  deleteUserResponse 
>