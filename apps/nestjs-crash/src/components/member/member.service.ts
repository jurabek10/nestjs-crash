import { Injectable } from '@nestjs/common';

@Injectable()
export class MemberService {
	public async signup(): Promise<string> {
		return 'Signup exctuted';
	}

	public async login(): Promise<string> {
		return 'Login exctuted';
	}

	public async updateMember(): Promise<string> {
		return 'updateMember exctuted';
	}

	public async getMember(): Promise<string> {
		return 'getMember exctuted';
	}
}
