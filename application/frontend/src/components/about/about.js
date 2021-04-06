import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Cards from './cards';
import Page from './pageRoute';

const about = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path} component={Cards} />
        <Route path={`${path}/:name`} component={Page} />
      </Switch>
    </>
  );
};

export default about;
