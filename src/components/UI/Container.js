export default function Container({ children }) {
    return (
        <div className="my-container">
            {children}
            <style jsx>{`
                .my-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                    padding: 0 .1rem;
                 }
                `}
            </style>
        </div>
    )
}