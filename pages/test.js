
class Index extends React.Component {
    render() {
        return (
            <Aux>
                <Layout>
                    <Greeting />
                    <div className={css.Main}>
                        <ul>
                            <PostLink title="Cointracker" id={1} />
                            <PostLink title="Learn Next.js is awesome" id={2} />
                            <PostLink title="Deploy apps with Zeit" id={3} />
                        </ul>
                        <div>Projekte</div>
                    </div>
                </Layout>
            </Aux>
        )
    }
}