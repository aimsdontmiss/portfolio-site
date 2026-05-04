import {Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import type {ProjectCardProps} from "@/utils/types";
import {ArrowSquareOutIcon} from "@phosphor-icons/react";

const ProjectCard = ( { title, description, image, link }: ProjectCardProps) => {
    return (
        <>
            <Card className="relative mx-auto w-full max-w-sm pt-0 rounded-lg shadow-lg p-4">
                <div className="absolute inset-0 z-30 h-75 aspect-video bg-black/35" />
                <img
                    src={image}
                    alt="Event cover"
                    className="aspect-video w-full h-70 object-cover object-top rounded-lg"
                />
                <CardHeader>
                    <CardAction>
                        <Badge variant="secondary">Featured</Badge>
                    </CardAction>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>
                        <p className="flex justify-evenly mt-2 mx-0">

                                {description}
                        </p>
                    </CardDescription>


                </CardHeader>
                <CardFooter>
                    <Button asChild className="w-full">
                        <a href={link}>
                            Visit Site
                            <ArrowSquareOutIcon className="w-4 h-4 ml-1" />
                        </a>
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
};

export default ProjectCard;