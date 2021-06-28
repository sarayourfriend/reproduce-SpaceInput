import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { space, SpaceInput } from './space';

export const Component = styled.div<{ margin: SpaceInput }>`
	${ props => css({ margin: space(props.margin) }) }
`
