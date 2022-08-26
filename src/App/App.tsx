import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.scss';

import { Loader, LoaderSize } from '@components/Loader';
import { WithLoader } from '@components/WithLoader';
import { Button, ButtonColor } from '@components/Button';
import { Card } from '@components/Card';
import { Input } from '@components/Input';
import { MultiDropdown, Option } from '@components/MultiDropdown';
import { CheckBox } from '@components/CheckBox/CheckBox';

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Loader size={LoaderSize.s} />
      <Loader size={LoaderSize.m} />
      <Loader size={LoaderSize.l} />

      <WithLoader loading={true}>
        <div>Семантическая верстка наше все!</div>
        <div>Семантическая верстка наше все!</div>
        <div>Семантическая верстка наше все!</div>
        <div>Семантическая верстка наше все!</div>
        <div>Семантическая верстка наше все!</div>
        <div>Семантическая верстка наше все!</div>
        <div>Семантическая верстка наше все!</div>
        <div>Семантическая верстка наше все!</div>
        <div>Семантическая верстка наше все!</div>
        <div>Семантическая верстка наше все!</div>
        <div>Семантическая верстка наше все!</div>
      </WithLoader>

      <Button color={ButtonColor.secondary}>secondary</Button>
      <Button color={ButtonColor.primary}>primary</Button>
      <Button disabled>disabled</Button>
      <Button loading>loading</Button>

      <Button>
        <div>div1</div>
        <div>div2</div>
        <div>div3</div>
      </Button>
      <Button loading>
        <div>div1</div>
        <div>div2</div>
        <div>div3</div>
      </Button>

      <Card
        image="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
        title="Мандарин"
        subtitle="Марокко"
        onClick={() => console.log('Мандарин куплен!')}
      />

      <Card
        image="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
        title="Мандариdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddн"
        subtitle={
          <a href="/morocco">
            Мароккaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaо
          </a>
        }
        content={
          <span>
            <b>299р</b> <i>5 отзывов</i>
          </span>
        }
      />

      <Card
        image="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
        title="Мандарин"
        subtitle={<a href="/morocco">Марокко</a>}
        content={
          <span>
            <b>299р</b> <i>5 отзывов</i>
          </span>
        }
      />

      <Input
        value="Кто такой биткоин?dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
        onChange={(value: string) => console.log(value)}
      />

      <Input
        value=""
        onChange={(value: string) => console.log(value)}
        placeholder="Начните набирать свой вопросdddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
        disabled
      />

      <Input
        value="п"
        className={'test123'}
        onChange={() => {
          console.log(123);
        }}
      />

      <Input value="" onChange={() => {}} disabled className={'test-class'} />

      <MultiDropdown
        options={[
          {
            key: 'msk',
            value: 'Москваffffffffffffffffffffffffffffffffffffffffffffffff',
          },
          { key: 'spb', value: 'Санкт-Петербург' },
          { key: 'ekb', value: 'Екатеринбург' },
          { key: 'msk1', value: 'Москва1' },
          { key: 'spb1', value: 'Санкт-Петербург1' },
          { key: 'ekb1', value: 'Екатеринбург1' },
          { key: 'msk2', value: 'Москва1' },
          { key: 'spb2', value: 'Санкт-Петербург1' },
          { key: 'ekb2', value: 'Екатеринбург1' },
          { key: 'msk3', value: 'Москва1' },
          { key: 'spb3', value: 'Санкт-Петербург1' },
          { key: 'ekb3', value: 'Екатеринбург1' },
        ]}
        value={[
          { key: 'msk', value: 'Москва' },
          { key: 'spb', value: 'Санкт-Петербург' },
          { key: 'ekb', value: 'Екатеринбург' },
          { key: 'msk1', value: 'Москва1' },
          { key: 'spb1', value: 'Санкт-Петербург1' },
          { key: 'ekb1', value: 'Екатеринбург1' },
          { key: 'msk2', value: 'Москва1' },
          { key: 'msk', value: 'Москва' },
          { key: 'spb', value: 'Санкт-Петербург' },
          { key: 'ekb', value: 'Екатеринбург' },
          { key: 'msk1', value: 'Москва1' },
          { key: 'spb1', value: 'Санкт-Петербург1' },
          { key: 'ekb1', value: 'Екатеринбург1' },
          { key: 'msk2', value: 'Москва1' },
        ]}
        onChange={(selected: Option[]) =>
          console.log('Выбрано:', JSON.stringify(selected))
        }
        pluralizeOptions={(options) =>
          options.map((value) => value.value).join(', ')
        }
      />

      <MultiDropdown
        options={[
          { key: 'msk', value: 'Москва' },
          { key: 'spb', value: 'Санкт-Петербург' },
          { key: 'ekb', value: 'Екатеринбург' },
        ]}
        disabled
        value={[]}
        onChange={(selected: Option[]) =>
          console.log('Выбрано:', JSON.stringify(selected))
        }
        pluralizeOptions={(options) =>
          options.map((value) => value.value).join(', ')
        }
      />

      <CheckBox onChange={(checked) => console.log(checked)} />
      <CheckBox checked onChange={(checked) => console.log(checked)} />
      <CheckBox disabled onChange={(checked) => console.log(checked)} />
      <CheckBox checked disabled onChange={(checked) => console.log(checked)} />
    </React.StrictMode>
  );
};
