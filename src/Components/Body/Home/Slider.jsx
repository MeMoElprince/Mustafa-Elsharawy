const skills = [
    'nodejs', 'nestjs', 'express', 'postgresql', 'mongodb', 'redis',
    'docker', 'git', 'ts', 'js', 'react', 'tailwind',
    'py', 'cpp', 'c', 'postman', 'github', 'linux'
];

const Slider = () => {
    const doubled = [...skills, ...skills];

    return (
        <div className="relative overflow-hidden py-5">
            <div className="flex gap-8 spinner w-fit">
                {doubled.map((skill, i) => (
                    <div key={i} className="h-10 w-10 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity">
                        <img
                            className="w-full h-full"
                            src={`https://skillicons.dev/icons?i=${skill}`}
                            alt={skill}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider;
