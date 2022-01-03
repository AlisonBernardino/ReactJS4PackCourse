import React from 'react';
import {Pagination, PaginationItem, PaginationLink } from 'reactstrap';

// Reactstrap access link
// https://6-4-0--reactstrap.netlify.app/components/pagination/


export default class CandyShopFooter extends React.Component{
    render(){
        return(
            <Pagination aria-label="Navigation">
                <PaginationItem disable>
                    <PaginationLink previous href='#'/>
                </PaginationItem>
                <PaginationItem active>
                    <PaginationLink href="#">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href='#'>
                        5
                    </PaginationLink>
                </PaginationItem>
            </Pagination>
        );
    }
}