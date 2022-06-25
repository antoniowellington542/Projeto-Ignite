import { CheckCircle, Lock } from 'phosphor-react'
import  { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export const Lesson = (props:LessonProps) =>{
    const { slug } = useParams<{slug: string}>()

    const isLessonAvailable = isPast(props.availableAt  );
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de ' MMMM' • 'k'h'mm", {locale: ptBR,})

    const [clicado, setClicado] = useState(false);

    const isActiveLesson = slug === props.slug;

    return(
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className="text-gray-300 capitalize">
                {availableDateFormatted}
            </span>

            <div 
                className= {classNames('rounded border border-gray-500 group-hover:border-green-500 p-4 mt-2', {
                    'bg-green-500': isActiveLesson,
                })}
            >
                <header className="flex items-center justify-between">
                        {isLessonAvailable ?(
                            <span 
                                className={classNames('font-medium flex items-center gap-2 text-sm text-blue-500', {
                                'text-white': isActiveLesson
                            })}>
                                <CheckCircle size={20}/>
                                Conteúdo liberado
                            </span>
                        ): (
                            <span 
                                className="text-sm text-orange-500 font-medium flex items-center gap-2">
                                <Lock size={20} />
                                Em breve
                            </span>
                        )} 
                    <span 
                        className={classNames('text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold', {
                            'border-white': isActiveLesson
                        })}>
                       {props.type === 'live' ? 'AO VIVO' : 'AULA PRATICA'}
                    </span>
                </header>
                <strong 
                    className={classNames('mt-5 block text-gray-200', {
                        'text-white': isActiveLesson
                    })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}