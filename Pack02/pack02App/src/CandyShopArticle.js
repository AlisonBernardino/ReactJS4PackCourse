import React, {Component} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const carouselItems = [
    {
        id: 1,
        altText: 'Lollipop 01',
        caption: 'Sweet, soft and sky-tasty'
    },
    {
        id: 2,
        altText: 'Gum 01',
        caption: 'Your days will never be the same anymore'
    },
    {
        id: 3,
        altText: 'Sugar bread',
        caption: 'The perfect choice for your breakfast'
    },
    {
        id: 4,
        altText: 'Colorful milk',
        caption: 'We decided to recreate the white milk concept'
    }
];

class CandyShopArticleCarousel extends Component{
    constructor(props){
        super(props);
        this.state = {activeIndex: 0};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting(){
        this.animating = true;
    }

    onExited(){
        this.animating = false;
    }

    next(){
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === carouselItems.length -1 ? 0 : this.state.activeIndex +1;
        this.setState({activeIndex: nextIndex});
    }

    previous(){
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? carouselItems.length - 1 : this.state.activeIndex -1;
        this.setState({activeIndex: nextIndex});
    }

    goToIndex(newIndex){
        if(this.animating) return;
        this.setState({activeIndex: newIndex});
    }

    render(){
        const {activeIndex} = this.state;

        const carouselSlides = carouselItems.map((item) => {
            return(
                <CarouselItem className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={this.onExiting}
                onExited={this.onExited}
                >
                    <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.altText}/>
                </CarouselItem>
            );
        });

        return(
            <div>
                <style>
                    {
                        `.custom-tag{
                            max-width: 100%;
                            height: 480px;
                            background: black;
                        }`
                    }
                </style>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={carouselItems} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
                    {carouselSlides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
                </Carousel>
            </div>
        );
    }
}

export default CandyShopArticleCarousel;