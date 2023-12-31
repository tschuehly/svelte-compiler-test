/* generated by Svelte v4.1.2 */
import {
	SvelteComponent,
	append,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from "svelte/internal";

import "svelte/internal/disclose-version";

function create_fragment(ctx) {
	let main;
	let h1;
	let t0;
	let t1;
	let t2;
	let t3;
	let button;
	let t5;
	let p;
	let mounted;
	let dispose;

	return {
		c() {
			main = element("main");
			h1 = element("h1");
			t0 = text("Hello ");
			t1 = text(/*name*/ ctx[0]);
			t2 = text("!");
			t3 = space();
			button = element("button");
			button.textContent = "Toggle name";
			t5 = space();
			p = element("p");

			p.innerHTML = `Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.`;
		},
		m(target, anchor) {
			insert(target, main, anchor);
			append(main, h1);
			append(h1, t0);
			append(h1, t1);
			append(h1, t2);
			append(main, t3);
			append(main, button);
			append(main, t5);
			append(main, p);

			if (!mounted) {
				dispose = listen(button, "click", /*toggleName*/ ctx[1]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*name*/ 1) set_data(t1, /*name*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(main);
			}

			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { name } = $$props;

	function toggleName() {
		if (name === "world") {
			$$invalidate(0, name = "Svelte");
		} else {
			$$invalidate(0, name = "world");
		}
	}

	$$self.$$set = $$props => {
		if ('name' in $$props) $$invalidate(0, name = $$props.name);
	};

	return [name, toggleName];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { name: 0 });
	}
}

export default Component;