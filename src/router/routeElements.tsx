import { Route } from 'react-router-dom';
import routes from './routes';
import Header from 'components/astoms/header';
import Footer from 'components/astoms/footer';
import Star from 'components/astoms/star';

const routeElements = () => routes.map(({
  LoadComponent,
  path,
  title,
  ...rest
}) => {
  return (
    <Route key={path} path={`${path}`} {...rest}>
      <Star></Star>
      <Header></Header>
      <LoadComponent />
      <Footer></Footer>
    </Route>
  );
});

export default routeElements;
