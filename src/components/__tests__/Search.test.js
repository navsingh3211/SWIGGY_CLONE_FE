
import {act, render} from "@testing-library/react";
import restroList from "../MockData/mockdataArr";
import Body from "../Body";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(restroList);
        }
    });
});

test("It should render the Body Component with Search",async()=>{
    await act(async()=> render(<Body/>));
    
})